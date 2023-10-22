import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OpeningButtons from './components/OpeningButtons';
import RehabStretches from './components/RehabStretches';
import WorkoutPreparation from './components/WorkoutPreparation';
import QuestionsWorkout from './components/QuestionsWorkout';


function App() {

  return (
    <div className="App">
      
      <Router>
      
        <Routes>
          <Route path = "/" element = {<OpeningButtons/>}/>
          <Route path = "/Workout-preparation" element = {<WorkoutPreparation/>}/>
          <Route path = "/Rehab-stretches" element = {<RehabStretches/>}/>
          <Route path = "/QuestionsWorkout" element = {<QuestionsWorkout/>}/>
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
