{
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  }

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;

    get size() {
      return this._size;
    }

    push(value: T) {
      const node: StackNode<T> = {value, next: this.head};
      this.head = node;
      this._size++;
    }

    pop(): T {
      if(this.head == null) {
        throw new Error('Stack is empty');
      }

      const node = this.head;
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl();
  stack.push('jake');
  stack.push(1);
  stack.push(true);
  stack.push('baek');

  stack.push('is');

  stack.push('hot');
  console.log(stack.pop());
  console.log(stack.pop()); console.log(stack.pop());
  
}