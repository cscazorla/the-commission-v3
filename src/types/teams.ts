import { Player } from './players'

export enum Team {
  RED = 'Rojo',
  WHITE = 'Blanco',
  BLUE = 'Azul',
  GREEN = 'Verde',
}

export interface TeamConfig {
  label: Team
  players: Player[]
  color: string
}

export const TEAMS: TeamConfig[] = [
  {
    label: Team.BLUE,
    color: 'blue.700',
    players: [
      Player.ALBERTO_MARCA,
      Player.JOSE_ANTONIO_MERA,
      Player.JORGE_PASTOR,
      Player.CARLOS_SANCHEZ,
      Player.ANGEL_ROMERO,
      Player.ALFONSO_OLLERO,
      Player.BORJA_PARIAS,
      Player.JAVI_CIA,
      Player.BORJA_MORENO,
      Player.CURRO_MUÑIZ,
    ],
  },
  {
    label: Team.GREEN,
    color: 'green',
    players: [
      Player.CARLOS_PAJARO,
      Player.KALI,
      Player.CURRO_FM,
      Player.PEPE,
      Player.THOMAS_LAWRENCE,
      Player.NICO_HOSTALET,
      Player.CASIMIRO_OLTRA,
      Player.POLI,
      Player.HILARIO,
      Player.ANGEL_ALVAREZ,
    ],
  },
  {
    label: Team.RED,
    color: 'red.600',
    players: [
      Player.PEDRO_RODRIGUEZ,
      Player.LUIS_CABEZA,
      Player.JOSE_LUIS_FERNANDEZ,
      Player.ANGEL_AGUADO,
      Player.ISABELO,
      Player.BORJA_CALZADILLA,
      Player.ALBERTO_FERNANDEZ,
      Player.JOSE_CIA,
      Player.RAFAEL_FM,
    ],
  },
  {
    label: Team.WHITE,
    color: 'black',
    players: [
      Player.ALVARO_CORNEJO,
      Player.DANI_NAVARRO,
      Player.PACO_ACEDO,
      Player.RAFA_LOPEZ,
      Player.MIGUEL_LAGUILLO,
      Player.BARBERA,
      Player.JOSE_RAMON,
      Player.PACO_MONTAÑO,
      Player.EZEQUIEL,
    ],
  },
]
