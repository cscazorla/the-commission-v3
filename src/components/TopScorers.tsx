import { MATCHES } from '@/data/matches'
import { TEAMS } from '@/types/teams'
import { calculatePlayerStats } from '@/utils/standings'
import { Table } from '@chakra-ui/react'

export default function TopScorers() {
  const scorers = calculatePlayerStats(MATCHES)
  const matchDays = Array.from(
    new Set(MATCHES.map((match) => match.matchDay))
  ).sort((a, b) => a - b)
  return (
    <Table.Root size="sm" variant={'outline'} interactive colorPalette={'blue'}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Jugador</Table.ColumnHeader>
          <Table.ColumnHeader>Equipo</Table.ColumnHeader>
          <Table.ColumnHeader>Goles</Table.ColumnHeader>
          {matchDays.map((matchDay) => (
            <Table.ColumnHeader key={matchDay}>J{matchDay}</Table.ColumnHeader>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {scorers.map((scorer) => (
          <Table.Row key={scorer.playerId}>
            <Table.Cell>{scorer.playerId}</Table.Cell>
            <Table.Cell
              color={TEAMS.find((team) => team.label === scorer.teamId)?.color}
            >
              {scorer.teamId}
            </Table.Cell>
            <Table.Cell>{scorer.goals}</Table.Cell>
            {matchDays.map((matchDay) => (
              <Table.Cell key={matchDay}>
                {scorer.matchDayGoals[matchDay] || 0}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
