
class App extends Components {
  users = [
    {
    ime: 'Branko',
    prezime: 'Branković',
    dob: 32,
    },
    {
    ime: 'Janko',
    prezime: 'Janković',
    dob: 42,
    },
    {
    ime: 'Stanko',
    prezime: 'Stanković',
    dob: 52,
    },
    ];
  render(){
    const users = this.users;

    return (
      <>
      <CalssComp user= {users[1]} />
      <FunComp1 user= {users[1]} />
      <FunComp2>
        {users}
      </FunComp2>  
      </>

    )
  }
}

export default App;
