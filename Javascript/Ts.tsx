//$$$ TypeScript

type Todo = Readonly<{
    id: number
    text: string
    done: boolean
    place?: Place
  }>

  // here both todo and return type shold be of type Todo
function toggleTodo(todo: Todo): Todo {
    // ...
    return todo
  }

// for Array
  function completeAll(todos: Todo[]): Todo[] {
    // We want it to return a new array
    // instead of modifying the original array
  }

  // 1. & in Ts

  // Override the done property of Todo
type CompletedTodo = Todo & {
  readonly done: true
}

// 2. | in Ts
// If we have a variable that’s a union type…
type Place = 'home' | 'work' | { custom: string }

function placeToString(place: Place): string {
  // TypeScript is smart about what the variable’s
  // possible values are for each branch of if/else
  if (place === 'home') {
    // TypeScript knows place = 'home' here
    // (So it won’t compile if you do place.custom)
  } else if (place === 'work') {
    // TypeScript knows place = 'work' here
    // (So it won’t compile if you do place.custom)
  } else {
    // TypeScript knows place = { custom: … } here
    // (So you can do place.custom)
  }
}