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
      Player.CARLOS_PAJARO,
      Player.PEPE,
      Player.RAFA_LOPEZ,
      Player.THOMAS_LAWRENCE,
      Player.ALFONSO_OLLERO,
      Player.ANGEL_ROMERO,
      Player.HILARIO,
      Player.BORJA_MORENO,
      Player.JOSE_CIA,
      Player.BORJA_CALZADILLA,
    ],
  },
  {
    label: Team.GREEN,
    color: 'green',
    players: [
      Player.KALI,
      Player.ALVARO_CORNEJO,
      Player.LUIS_CABEZA,
      Player.CARLOS_SANCHEZ,
      Player.CASIMIRO_OLTRA,
      Player.MIGUEL_LAGUILLO,
      Player.ALBERTO_FERNANDEZ,
      Player.BORJA_PARIAS,
      Player.DANI_MARTIN,
      Player.PACO_MONTAÑO,
    ],
  },
  {
    label: Team.RED,
    color: 'red.600',
    players: [
      Player.PEDRO_RODRIGUEZ,
      Player.CURRO_FM,
      Player.JOSE_LUIS_FERNANDEZ,
      Player.ANGEL_AGUADO,
      Player.JAVI_CIA,
      Player.EZEQUIEL,
      Player.JOSE_RAMON,
      Player.RAFAEL_FM,
      Player.NICO_HOSTALET,
      Player.CURRO_MUÑIZ,
    ],
  },
  {
    label: Team.WHITE,
    color: 'black',
    players: [
      Player.ALBERTO_MARCA,
      Player.DANI_NAVARRO,
      Player.JORGE_PASTOR,
      Player.ISABELO,
      Player.BARBERA,
      Player.PACO_ACEDO,
      Player.JOSE_ANTONIO_MERA,
      Player.ANGEL_ALVAREZ,
      Player.POLI,
    ],
  },
]
