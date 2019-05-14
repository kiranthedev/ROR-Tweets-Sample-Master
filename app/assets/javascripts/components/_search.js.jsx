const Search = (props) => {
  
  let formFields = {}

  return(
    <nav>
      <div class="nav-wrapper">
        <form onSubmit={ () => props.handleSubmit(formFields.term.value)}>
          <div class="input-field">
            <input id="search" type="search" placeholder="Search" required ref={input => formFields.term = input}/>
            <label class="label-icon" for="search"><i class="material-icons">search</i></label>
            <i class="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  )
}