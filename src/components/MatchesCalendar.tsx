import { MATCHES as matches } from '@/data/matches'
import { formatDate } from '@/utils/dates'
import { formatGoals } from '@/utils/player'
import { groupMatchesByMatchDay } from '@/utils/standings'
import { getTeamColor } from '@/utils/team'
import { Box, Card, Heading, Text } from '@chakra-ui/react'

export default function MatchesCalendar() {
  const matchesByDate = groupMatchesByMatchDay(matches)
  console.log(matchesByDate)

  return (
    <Box>
      {Object.entries(matchesByDate)
        .sort(([dayA], [dayB]) => parseInt(dayA) - parseInt(dayB))
        .map(([date, dateMatches]) => (
          <Box key={date}>
            <Box mb={3}>
              <Heading fontWeight="bold" mb={1}>
                <Text>
                  Jornada {dateMatches[0].matchDay}
                  {dateMatches[0].postponedFromMatchDay && ' (Recuperación)'}
                </Text>
              </Heading>
              <Text color="text.secondary">
                {formatDate(dateMatches[0].date)}
              </Text>
            </Box>

            <Box display="flex" flexDirection="column" gap={4} mb={5}>
              {dateMatches.map((match) => (
                <Card.Root key={match.id} colorPalette="gray.700" shadow="md">
                  <Card.Body>
                    <Heading color="text.secondary" mb={1} textAlign="center">
                      {match.time}h
                    </Heading>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      {/* Home Team */}
                      <Box
                        flex={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-end"
                        alignSelf="flex-start"
                      >
                        <Heading color={getTeamColor(match.homeTeam)}>
                          {match.homeTeam}
                        </Heading>
                        <Text color="text.secondary">
                          {formatGoals(match.homeGoals)}
                        </Text>
                      </Box>

                      {/* Score */}
                      <Box
                        flex={1}
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                      >
                        <Text fontWeight="bold">
                          {match.played
                            ? `${match.homeGoals.length} - ${match.awayGoals.length}`
                            : 'vs'}
                        </Text>
                      </Box>

                      {/* Away Team */}
                      <Box
                        flex={2}
                        display="flex"
                        flexDirection="column"
                        alignItems="flex-start"
                        alignSelf="flex-start"
                      >
                        <Heading color={getTeamColor(match.awayTeam)}>
                          {match.awayTeam}
                        </Heading>
                        <Text color="text.secondary">
                          {formatGoals(match.awayGoals)}
                        </Text>
                      </Box>
                    </Box>
                  </Card.Body>
                </Card.Root>
              ))}
            </Box>
          </Box>
        ))}
    </Box>
  )
}
