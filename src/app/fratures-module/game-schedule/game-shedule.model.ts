
export interface IGameSchedule  {
  betType: string,
  upcoming: Array<GameInfo>,
  results: Array<GameInfo>
}

export interface GameInfo {
  id: string,
  startTime: string
}

export interface IGameResponse {
  id: string,
  races: Array<GameRace>,
  status: string
}

export interface GameRace {
  date: string,
  name: string,
  scheduledStartTime: string,
  starts: Array<RaceStart>
}

export interface RaceStart {
  number: number,
  driver: {
    firstName: string,
    lastName: string
  },
  horse: {
    name: string,
    trainer: {
      firstName: string,
      lastName: string
  },
  pedigree: {
    father: {
    name: string
    }
  }
  }
}
