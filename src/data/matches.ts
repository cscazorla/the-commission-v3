import { Match } from '../types/league'
import { Player } from '../types/players'
import { Team } from '../types/teams'

export const MATCHES: Match[] = [
  {
    id: 'match1',
    matchDay: 1,
    date: '2025-11-03',
    time: '21:00',
    played: true,
    homeTeam: Team.RED,
    awayTeam: Team.BLUE,
    homeGoals: [
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.BORJA_CALZADILLA,
      },
      {
        scorer: Player.ISABELO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.ALFONSO_OLLERO,
      },
      {
        scorer: Player.JORGE_PASTOR,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
    ],
  },
  {
    id: 'match2',
    matchDay: 1,
    date: '2025-11-03',
    time: '22:00',
    played: true,
    homeTeam: Team.WHITE,
    awayTeam: Team.GREEN,
    homeGoals: [
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.CARLOS_PAJARO,
      },
      {
        scorer: Player.CARLOS_PAJARO,
      },
      {
        scorer: Player.CARLOS_PAJARO,
      },
      {
        scorer: Player.CARLOS_PAJARO,
      },
      {
        scorer: Player.CARLOS_PAJARO,
      },
    ],
  },
  {
    id: 'match3',
    matchDay: 2,
    date: '2025-11-10',
    time: '21:00',
    played: false,
    homeTeam: Team.GREEN,
    awayTeam: Team.RED,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match4',
    matchDay: 2,
    date: '2025-11-10',
    time: '22:00',
    played: false,
    homeTeam: Team.BLUE,
    awayTeam: Team.WHITE,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match5',
    matchDay: 3,
    date: '2025-11-17',
    time: '21:00',
    played: false,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match6',
    matchDay: 3,
    date: '2025-11-17',
    time: '22:00',
    played: false,
    homeTeam: Team.GREEN,
    awayTeam: Team.BLUE,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match7',
    matchDay: 4,
    date: '2025-11-24',
    time: '21:00',
    played: false,
    homeTeam: Team.GREEN,
    awayTeam: Team.WHITE,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match8',
    matchDay: 4,
    date: '2025-11-24',
    time: '22:00',
    played: false,
    homeTeam: Team.RED,
    awayTeam: Team.BLUE,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match9',
    matchDay: 5,
    date: '2025-12-01',
    time: '21:00',
    played: false,
    homeTeam: Team.BLUE,
    awayTeam: Team.WHITE,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match10',
    matchDay: 5,
    date: '2025-12-01',
    time: '22:00',
    played: false,
    homeTeam: Team.RED,
    awayTeam: Team.GREEN,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match11',
    matchDay: 6,
    date: '2025-12-08',
    time: '21:00',
    played: false,
    homeTeam: Team.BLUE,
    awayTeam: Team.GREEN,
    homeGoals: [],
    awayGoals: [],
  },
  {
    id: 'match12',
    matchDay: 6,
    date: '2025-12-08',
    time: '22:00',
    played: false,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [],
    awayGoals: [],
  },
]
