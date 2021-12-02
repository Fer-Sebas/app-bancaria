async function getUser() {
    try {
      const response = await axios.get('http://localhost:5000/users/61a7b11698481c8d42fa9ade');      
      return ({
        username: response.data.username, birthDate: response.data.birthDate, email: response.data.email, address: response.data.address,
        idDoc: response.data.idDoc, userType: response.data.userType, accounts: response.data.accounts,
      })
    } catch (error) { console.error(error); }
  }



  if (userData.role === 2) {
    return (
      <>
        <Header user={userData} />
          <Card>
            <h2>Solicitudes</h2>
          </Card>
          <Card>
            <h2>Productos</h2>
          </Card>
          <Card>
            <h2>Reclamos</h2>
          </Card>
            <button className="fab">                    
                <svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.8326 32.7549L15.5337 26.8197C16.0626 26.1732 15.5925 25.233 14.7698 25.233L12.3604 25.233L12.3604 22.0561C11.5965 22.2324 10.7473 22.5561 9.9834 22.5561C9.21946 22.5561 8.54076 22.2324 7.77682 22.0561L7.77682 25.233L5.36748 25.233C4.54478 25.233 4.07467 26.1732 4.60355 26.8197L9.30469 32.7549C9.71604 33.225 10.4212 33.225 10.8326 32.7549Z" fill="black"/>
                  <path d="M10.0689 20.6172C15.5927 20.6172 20 16.1511 20 10.6861C20 5.16221 15.5339 0.754883 10.0689 0.754883C4.54502 0.754883 0.137695 5.22097 0.137695 10.6861C0.137695 16.2099 4.60379 20.6172 10.0689 20.6172ZM10.8328 11.5675H9.3637C7.71829 11.5675 6.36672 10.2159 6.36672 8.57054C6.36672 6.9839 7.65953 5.69109 9.24617 5.63232V3.86939H10.9503V5.63232C12.537 5.69109 13.8298 6.9839 13.8298 8.57054H12.1256C12.1256 7.86537 11.538 7.33649 10.8916 7.33649H9.42246C8.71729 7.33649 8.18841 7.92413 8.18841 8.57054C8.18841 9.27571 8.77605 9.80459 9.42246 9.80459H10.8916C12.537 9.80459 13.8885 11.1562 13.8885 12.8016C13.8885 14.3882 12.5957 15.681 11.0091 15.7398V17.5027H9.30493V15.7398C7.71829 15.681 6.42548 14.3882 6.42548 12.8016H8.12964C8.12964 13.5067 8.71729 14.0356 9.3637 14.0356H10.8328C11.538 14.0356 12.0669 13.448 12.0669 12.8016C12.0669 12.0964 11.538 11.5675 10.8328 11.5675Z" fill="black"/>
                </svg>
            </button>
      </>
      )
  }
  
  if (userData.role === 3) {
    return (
      <>
        <Header user={userData} />
        <Card>
          <h2>Solicitudes</h2>
        </Card>
        <Card>
          <h2>Productos</h2>
        </Card>
        <Card>
          <h2>Reclamos</h2>
        </Card>
        <Card>
          <h2>Funcionarios</h2>
        </Card>
      </>
      )
  }