import { Team, TEAMS } from '@/types/teams'

export const getTeamColor = (team: Team) => {
  return TEAMS.find((t) => t.label === team)?.color
}
