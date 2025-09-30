import { Match } from '../types/league'
import { Player } from '../types/players'
import { Team } from '../types/teams'

export const MATCHES: Match[] = [
  {
    id: 'match1',
    matchDay: 1,
    date: '2025-09-08',
    time: '21:00',
    played: true,
    homeTeam: Team.RED,
    awayTeam: Team.BLUE,
    homeGoals: [
      {
        scorer: Player.JAVI_CIA,
      },
      {
        scorer: Player.JAVI_CIA,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.CARLOS_PAJARO,
      },
      {
        scorer: Player.ALFONSO_OLLERO,
      },
    ],
  },
  {
    id: 'match2',
    matchDay: 1,
    date: '2025-09-08',
    time: '22:00',
    played: true,
    homeTeam: Team.WHITE,
    awayTeam: Team.GREEN,
    homeGoals: [
      {
        scorer: Player.ALBERTO_MARCA,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
      {
        scorer: Player.PACO_ACEDO,
      },
      {
        scorer: Player.PACO_ACEDO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.KALI,
      },
    ],
  },
  {
    id: 'match3',
    matchDay: 2,
    date: '2025-09-15',
    time: '21:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.RED,
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
        scorer: Player.LUIS_CABEZA,
      },
      {
        scorer: Player.LUIS_CABEZA,
      },
      {
        scorer: Player.LUIS_CABEZA,
      },
    ],
    awayGoals: [
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.CURRO_FM,
      },
    ],
  },
  {
    id: 'match4',
    matchDay: 2,
    date: '2025-09-15',
    time: '22:00',
    played: true,
    homeTeam: Team.BLUE,
    awayTeam: Team.WHITE,
    homeGoals: [
      {
        scorer: Player.PEPE,
      },
    ],
    awayGoals: [
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.PACO_ACEDO,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
    ],
  },
  {
    id: 'match5',
    matchDay: 3,
    date: '2025-09-22',
    time: '21:00',
    played: true,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [
      {
        scorer: Player.ISABELO,
      },
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.POLI,
      },
      {
        scorer: Player.DANI_NAVARRO,
      },
      {
        scorer: Player.DANI_NAVARRO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.JOSE_RAMON,
      },
      {
        scorer: Player.JOSE_RAMON,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
    ],
  },
  {
    id: 'match6',
    matchDay: 3,
    date: '2025-09-22',
    time: '22:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.BLUE,
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
        scorer: Player.CARLOS_SANCHEZ,
      },
    ],
    awayGoals: [
      {
        scorer: Player.RAFA_LOPEZ,
      },
      {
        scorer: Player.PEPE,
      },
      {
        scorer: Player.PEPE,
      },
      {
        scorer: Player.PEPE,
      },
      {
        scorer: Player.PEPE,
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
    id: 'match7',
    matchDay: 4,
    date: '2025-09-29',
    time: '21:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.WHITE,
    homeGoals: [
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.CARLOS_SANCHEZ,
      },
      {
        scorer: Player.LUIS_CABEZA,
      },
    ],
    awayGoals: [
      {
        scorer: Player.JORGE_PASTOR,
      },
      {
        scorer: Player.JORGE_PASTOR,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
    ],
  },
  {
    id: 'match8',
    matchDay: 4,
    date: '2025-09-29',
    time: '22:00',
    played: true,
    homeTeam: Team.RED,
    awayTeam: Team.BLUE,
    homeGoals: [
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
    ],
    awayGoals: [
      {
        scorer: Player.BORJA_CALZADILLA,
      },
    ],
  },
  {
    id: 'match9',
    matchDay: 5,
    date: '2025-10-06',
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
    date: '2025-10-06',
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
    date: '2025-10-13',
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
    date: '2025-10-13',
    time: '22:00',
    played: false,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [],
    awayGoals: [],
  },
]
