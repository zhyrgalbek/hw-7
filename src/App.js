import './App.css';
import Comment from './components/comment';

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Ketty',
    avatarUrl: 'https://placekitten.com/g/64/64'
  }
}


function App() {
  return (
    <div className='App'>
      <Comment comment={comment} />    
    </div>
  );
}

export default App;
