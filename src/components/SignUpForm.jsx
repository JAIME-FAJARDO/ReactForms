export default function SignUpForm() {
    return <h2>Sign Up!</h2>;
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  setToken(result.token);