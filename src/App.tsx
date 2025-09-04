import { Center, Container, Tabs } from '@chakra-ui/react'
import Attendance from './components/Attendance'
import MatchesCalendar from './components/MatchesCalendar'
import StandingsTable from './components/StandingsTable'
import TopScorers from './components/TopScorers'

function App() {
  return (
    <>
      <Container>
        <Center>
          <img width="128" height="128" src="logo.svg" alt="The Commission" />
        </Center>
        <Tabs.Root
          lazyMount
          unmountOnExit
          defaultValue="clasification"
          size="sm"
        >
          <Center>
            <Tabs.List>
              <Tabs.Trigger value="clasification">Clasificación</Tabs.Trigger>
              <Tabs.Trigger value="top-scorers">Goleadores</Tabs.Trigger>
              <Tabs.Trigger value="calendar">Calendario</Tabs.Trigger>
              <Tabs.Trigger value="attendance">Asistencia</Tabs.Trigger>
            </Tabs.List>
          </Center>
          <Tabs.Content value="clasification">
            <StandingsTable />
          </Tabs.Content>
          <Tabs.Content value="top-scorers">
            <TopScorers />
          </Tabs.Content>
          <Tabs.Content value="calendar">
            <MatchesCalendar />
          </Tabs.Content>
          <Tabs.Content value="attendance">
            <Attendance />
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </>
  )
}

export default App
