import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1 className="text-3xl font-bold underline hover:bg-sky-950">
          Hello world!
        </h1>
        <table>
          <tbody>
              <tr class="odd:bg-sky-300 even:bg-slate-950">
                <td>David</td>
                <td>job</td>
              </tr>
              <tr class="odd:bg-sky-300 even:bg-slate-950">
                <td>David</td>
                <td>job</td>
              </tr>
          </tbody>
        </table>
        <form>
          <label class="block">
            <span class="block text-sm font-medium text-slate-700">Username</span>
            <input type="text" class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
              focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
              disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
              invalid:border-pink-500 invalid:text-pink-600
              focus:invalid:border-pink-500 focus:invalid:ring-pink-500 text-slate-950
            "/>
          </label>
        </form>
      </header>
    </div>
  );
}

export default App;
