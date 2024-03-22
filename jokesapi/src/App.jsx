import { useQuery, useMutation} from '@tanstack/react-query';
import './App.css'

// const queryClient = useQueryClient();

function App() {
const {data, error, isLoading} = useQuery({
  queryKey: ['programming'],
  queryFn: ()=>
  fetch('https://v2.jokeapi.dev/joke/Programming')
  .then((res => res.json())
  ),
});

const {mutate, isPending, isError, isSuccess} = useMutation({
  mutationFn: (newJoke)=>
  fetch("https://v2.jokeapi.dev/joke/programming/posts",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8'
    },
    body: json.stringify(newJoke)
  }).then((res) => res.json())
  
})

if(error || isError) return <div>There was an error</div>
if(isLoading) return <div>Data is loading</div>

const {id, error:jokeError, joke, category, type, setup,delivery, flags,lang, safe} = data;
  return (
    <>
    {isPending && <div>Data is being added</div>}
    <button onClick={()=> mutate({
    "error": false,
    "category": "Programming",
    "type": "twopart",
    "setup": "So what's a set of predefined steps the government might take to preserve the environment?",
    "delivery": "An Al-Gore-ithm.",
    "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
    },
    "id": 52,
    "safe": true,
    "lang": "en"
})}>Add Joke</button>
      <div>
      <div>
<h4>ID :{id}</h4>
<h4>Error: {jokeError ? 'yes' : 'no'}</h4>
<h4>Category:{category}</h4>
<h4>Type:{type}</h4>
<h4>joke:{joke}</h4>
<h4>setUp: {setup}</h4>
<h4>Delivery: {delivery}</h4>
{/* <h4>flags: {flags?.nsfw}</h4>
<h4>flags: {flags?.religious}</h4>
<h4>flags: {flags?.political}</h4>
<h4>flags: {flags?.racist}</h4>
<h4>flags: {flags?.sexist}</h4>
<h4>flags: {flags?.explicit}</h4> */}
<h4>Language:{lang}</h4>
<h4>Safe :{safe ? 'true' : 'false'}</h4>
      </div>
       </div>
    </>
  )
}

export default App
