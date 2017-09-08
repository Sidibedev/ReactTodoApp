import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Todo extends Component {

 render() {
    
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> {this.props.title}</h2>
        </div>
       
       
        
        
        {this.props.tasks.map(function(task){

          return <Todolist key={task.id} task={task}> </Todolist>
          


        }) }
        
        
        
      </div>
    );
  }
}





// TodoList est le composant pour afficher les differents tasks
class Todolist extends Component {
  render() {
    return (
      <div>

                      <article key={this.props.task.id}>
                      
                                  <h2># {this.props.task.id} - {this.props.task.description} 
                                       -- {this.props.task.complete ? '🔵' :'🔴 '}  
                                  </h2> 
                                  
                      </article>
        
      </div>
    );
  }
}





// TODOAPP
const ROUTES = {
  home : '#/',
  completetasks : '#/completetasks',
  incmpletetasks : '#/incompletetasks'
}
class TodoApp extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      currenRoute : ROUTES.home,
      "tasks" : [
        {
            'id' : 1 ,
            'description' : 'go to bed',
            'complete' : false
  
        },
        {
          'id' : 2,
          'description' : 'learn react',
          'complete' : true
  
        },
        {
  
          'id' : 3 ,
          'description' : 'take a selfie',
          'complete' : false
        }
        
      ]
    }
  }
  

  componentDidMount() {
    window.onhashchange = () => {
    this.setState(() => { 
     return {currenRoute : window.location.hash}
    })
    }
  }
  completetask() {
    return this.state.tasks.filter(function(task){
      
            return task.complete === true 
    })
  }
  
  incomplettask() {
    return this.state.tasks.filter(function(task){
      
            return task.complete === false 
    })
  
   
  }
  
  alltask() {
    return this.state.tasks
  
  
   
  }

   addtask = () => {
     var taskdescription = document.getElementById('inputtask').value
     let task = {
       id : this.state.tasks.length + 1,
       description: taskdescription,
       complete : false
     }
     this.setState((prevstate) => { 
      
       return { 
  
         task: prevstate.tasks.push(task)
  
      }});
    
          
    }

    title() {
      if (this.state.currenRoute === ROUTES.completetasks) {
        return 'Complete Tasks'
      }else if(this.state.currenRoute === ROUTES.incmpletetasks) {
        return 'InComplete Tasks'
      }else if (this.state.currenRoute === ROUTES.home) {
        return 'All Tasks'
      }
    }

    renderRoute() {

      

      if (this.state.currenRoute === ROUTES.completetasks) {
        return <Todo tasks = {this.completetask()} title = {this.title()}/>
      }else if(this.state.currenRoute === ROUTES.incmpletetasks) {
        return <Todo tasks = {this.incomplettask()} title = {this.title()}/>
      }else if (this.state.currenRoute === ROUTES.home) {
        return <Todo tasks = {this.alltask()} title = {this.title()}/>
      }else {
        return <h1>404 NOT FOUND</h1>
      }


      
    }

  render() {
    return (
      <div>

      <input type="text" id ="inputtask" placeholder="add a new task"/>
      <button onClick={this.addtask} >add task </button>
      
      {this.renderRoute()}
      
      <a href={ROUTES.home}>All tasks</a> <br/>
      <a href={ROUTES.completetasks}>Complete tasks</a> <br/>
      <a href={ROUTES.incmpletetasks}>Incomplete tasks</a>
      
      
      
      
        
      </div>
    );
  }
}















export default TodoApp;
