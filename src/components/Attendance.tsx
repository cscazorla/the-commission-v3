import { database } from '@/lib/firebase'
import { Player } from '@/types/players'
import { TEAMS } from '@/types/teams'
import { getPlayerKey } from '@/utils/player'
import {
  Card,
  Checkbox,
  Grid,
  GridItem,
  Heading,
  Stack,
} from '@chakra-ui/react'
import { onValue, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react'

export default function Attendance() {
  // Create initial state with all players set to false
  const createInitialAttendance = (): Record<keyof typeof Player, boolean> => {
    // Create object with all Player enum keys initialized to false
    return Object.fromEntries(
      Object.keys(Player).map((key) => [key, false])
    ) as Record<keyof typeof Player, boolean>
  }

  const [attendance, setAttendance] = useState<
    Record<keyof typeof Player, boolean>
  >(createInitialAttendance())
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const handleToggle = async (player: Player) => {
    try {
      const playerKey = getPlayerKey(player)
      const newValue = !attendance[playerKey]
      await set(ref(database, `attendance/${playerKey}`), newValue)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to update attendance'
      )
    }
  }

  useEffect(() => {
    try {
      const attendanceRef = ref(database, 'attendance')
      const unsubscribe = onValue(
        attendanceRef,
        (snapshot) => {
          const data = snapshot.val()
          setAttendance(() => ({
            ...createInitialAttendance(),
            ...data,
          }))
          setLoading(false)
        },
        (error) => {
          setError(error.message)
          setLoading(false)
        }
      )

      return () => unsubscribe()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      setLoading(false)
    }
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  const getCheckedPlayersCount = (team: (typeof TEAMS)[0]) => {
    return team.players.filter((player) => attendance[getPlayerKey(player)])
      .length
  }

  return (
    <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap="4">
      {TEAMS.map((team) => (
        <GridItem key={team.label}>
          <Card.Root>
            <Card.Header>
              <Heading color={team.color}>
                {team.label} ({getCheckedPlayersCount(team)} jugadores)
              </Heading>
            </Card.Header>
            <Card.Body>
              <Stack align="flex-start" gap="3">
                {team.players.map((player) => (
                  <Checkbox.Root
                    key={player}
                    variant="outline"
                    // colorPalette={team.color}
                    checked={!!attendance[getPlayerKey(player)]}
                    onCheckedChange={() => handleToggle(player)}
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>{player}</Checkbox.Label>
                  </Checkbox.Root>
                ))}
              </Stack>
            </Card.Body>
          </Card.Root>
        </GridItem>
      ))}
    </Grid>
  )
}
