const CreateLogin = () => {
    return (
        <div class="main">
                <div class="header">
                  <h2 class="title">Interactive Map Administrative Access</h2>
                </div>
                <div class="form" id ="login">
                  <form action ="#" method = "get">
                    <h3>Log in to Manage and Edit the Interactive Map</h3>
                    <div class='left'>
                      <label for = "username" class = "label"> Employee ID: </label>
                      <input class = "input_full" id = "username" type="text" name="username"/>
                      <label for = "password" class = "label"> Password: </label>
                      <input class = "input_full" id = "password" type="text" name="password"/>
                      <a href ="#" class ="psw">Forgot your login info?</a>
                      <button type = "submit" class = "btn red_btn" id='login_btn'> Log In </button>
                    </div>
                    <div class='right'> 
                    </div>
                  </form>
                </div>
            </div>
    )}

    export default CreateLogin