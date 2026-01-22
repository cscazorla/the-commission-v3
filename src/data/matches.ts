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
        scorer: Player.DANI_NAVARRO,
      },
      {
        scorer: Player.MIGUEL_LAGUILLO,
      },
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.BARBERA,
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
        scorer: Player.NICO_HOSTALET,
      },
      {
        scorer: Player.KALI,
      },
      {
        scorer: Player.PEPE,
      },
    ],
  },
  {
    id: 'match3',
    matchDay: 2,
    date: '2025-11-10',
    time: '21:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.RED,
    homeGoals: [
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
      {
        scorer: Player.PEPE,
      },
      {
        scorer: Player.PEPE,
      },
      {
        scorer: Player.CURRO_FM,
      },
      {
        scorer: Player.CURRO_FM,
      },
    ],
    awayGoals: [
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
    ],
  },
  {
    id: 'match4',
    matchDay: 2,
    date: '2025-11-10',
    time: '22:00',
    played: true,
    homeTeam: Team.BLUE,
    awayTeam: Team.WHITE,
    homeGoals: [
      {
        scorer: Player.CARLOS_SANCHEZ,
      },
    ],
    awayGoals: [
      {
        scorer: Player.DANI_NAVARRO,
      },
      {
        scorer: Player.BARBERA,
      },
    ],
  },
  {
    id: 'match5',
    matchDay: 3,
    date: '2025-11-17',
    time: '21:00',
    played: true,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [
      {
        scorer: Player.PACO_ACEDO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.ALVARO_CORNEJO,
      },
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.BARBERA,
      },
    ],
    awayGoals: [
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.ISABELO,
      },
      {
        scorer: Player.ISABELO,
      },
    ],
  },
  {
    id: 'match6',
    matchDay: 3,
    date: '2025-11-17',
    time: '22:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.BLUE,
    homeGoals: [
      {
        scorer: Player.KALI,
      },
    ],
    awayGoals: [
      {
        scorer: Player.ANGEL_ROMERO,
      },
      {
        scorer: Player.ANGEL_ROMERO,
      },
      {
        scorer: Player.CARLOS_SANCHEZ,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
    ],
  },
  {
    id: 'match7',
    matchDay: 4,
    date: '2025-12-01',
    time: '21:00',
    played: true,
    homeTeam: Team.GREEN,
    awayTeam: Team.WHITE,
    homeGoals: [
      {
        scorer: Player.CARLOS_PAJARO,
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
        scorer: Player.CURRO_FM,
      },
      {
        scorer: Player.CURRO_FM,
      },
    ],
    awayGoals: [
      {
        scorer: Player.ALVARO_CORNEJO,
      },
    ],
  },
  {
    id: 'match8',
    matchDay: 4,
    date: '2025-12-01',
    time: '22:00',
    played: true,
    homeTeam: Team.RED,
    awayTeam: Team.BLUE,
    homeGoals: [
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
    ],
    awayGoals: [
      {
        scorer: Player.ALFONSO_OLLERO,
      },
    ],
  },
  {
    id: 'match9',
    matchDay: 5,
    date: '2025-12-08',
    time: '21:00',
    played: true,
    homeTeam: Team.BLUE,
    awayTeam: Team.WHITE,
    homeGoals: [
      {
        scorer: Player.ANGEL_ROMERO,
      },
      {
        scorer: Player.JORGE_PASTOR,
      },
      {
        scorer: Player.JORGE_PASTOR,
      },
      {
        scorer: Player.ALBERTO_MARCA,
      },
    ],
    awayGoals: [
      {
        scorer: Player.BARBERA,
      },
      {
        scorer: Player.PACO_ACEDO,
      },
    ],
  },
  {
    id: 'match10',
    matchDay: 5,
    date: '2025-12-08',
    time: '22:00',
    played: true,
    homeTeam: Team.RED,
    awayTeam: Team.GREEN,
    homeGoals: [
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.PEDRO_RODRIGUEZ,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.ANGEL_AGUADO,
      },
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.JOSE_LUIS_FERNANDEZ,
      },
      {
        scorer: Player.ALBERTO_FERNANDEZ,
      },
      {
        scorer: Player.ALBERTO_FERNANDEZ,
      },
    ],
    awayGoals: [
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
    ],
  },
  {
    id: 'match11',
    matchDay: 6,
    date: '2026-01-26',
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
    date: '2026-01-26',
    time: '22:00',
    played: false,
    homeTeam: Team.WHITE,
    awayTeam: Team.RED,
    homeGoals: [],
    awayGoals: [],
  },
]
