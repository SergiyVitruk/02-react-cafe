import css from './App.module.css'
import CafeInfo from "../CafeInfo/CafeInfo.tsx";
// import { Votes , VoteType } from '../../types/votes.ts';

export default function App() {
    // const [votes, setVotes] = useState<Votes>({
    // good: 0,
    // neutral: 0,
    // bad: 0,
    // });
  
  return (
    <div className={css.app}>
      <CafeInfo/>
    </div>
  )
}