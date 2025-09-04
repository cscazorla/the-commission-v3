import { Goal } from '@/types/league'
import { Player } from '@/types/players'

export const getPlayerKey = (player: Player): keyof typeof Player => {
  return Object.keys(Player).find(
    (key) => Player[key as keyof typeof Player] === player
  ) as keyof typeof Player
}

export const formatGoals = (goals: Goal[]): string => {
  const goalsByPlayer = goals.reduce((acc, goal) => {
    const playerName = goal.scorer
    if (!acc[playerName]) {
      acc[playerName] = { count: 0, isOwnGoal: goal.isOwnGoal ?? false }
    }
    acc[playerName].count++
    return acc
  }, {} as Record<string, { count: number; isOwnGoal: boolean }>)

  return Object.entries(goalsByPlayer)
    .map(([player, { count, isOwnGoal }]) => {
      const goals = count > 1 ? ` (${count})` : ''
      return isOwnGoal ? `${player} (p.p.)${goals}` : `${player}${goals}`
    })
    .join(', ')
}
