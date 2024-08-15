import { signUp } from "@/lib/action"

const SignUpForm = () => {
  return (
    <section>
      <form action={signUp}>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
        </div>
        <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </section>
  )
}

export default SignUpForm
