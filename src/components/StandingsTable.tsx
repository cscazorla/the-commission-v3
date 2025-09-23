import { MATCHES } from '@/data/matches'
import { TEAMS } from '@/types/teams'
import { Table } from '@chakra-ui/react'
import { calculateTeamStats } from '../utils/standings'

export default function StandingsTable() {
  const standings = calculateTeamStats(MATCHES)
  return (
    <Table.Root size="sm" variant={'outline'} interactive colorPalette={'blue'}>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeader>Equipo</Table.ColumnHeader>
          <Table.ColumnHeader>PT</Table.ColumnHeader>
          <Table.ColumnHeader>PJ</Table.ColumnHeader>
          <Table.ColumnHeader>PG</Table.ColumnHeader>
          <Table.ColumnHeader>PE</Table.ColumnHeader>
          <Table.ColumnHeader>PP</Table.ColumnHeader>
          <Table.ColumnHeader>GF</Table.ColumnHeader>
          <Table.ColumnHeader>GC</Table.ColumnHeader>
          <Table.ColumnHeader>GA</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {standings.map((team) => (
          <Table.Row key={team.teamId}>
            <Table.Cell
              color={TEAMS.find((t) => t.label === team.teamId)?.color}
            >
              {team.teamId}
            </Table.Cell>
            <Table.Cell>{team.points}</Table.Cell>
            <Table.Cell>{team.played}</Table.Cell>
            <Table.Cell>{team.won}</Table.Cell>
            <Table.Cell>{team.drawn}</Table.Cell>
            <Table.Cell>{team.lost}</Table.Cell>
            <Table.Cell>{team.goalsFor}</Table.Cell>
            <Table.Cell>{team.goalsAgainst}</Table.Cell>
            <Table.Cell>{team.goalDifference}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  )
}
