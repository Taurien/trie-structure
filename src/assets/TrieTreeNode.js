export class TrieTreeNode {
    constructor(value) {
      //Propiedades del Nodo para el árbol trie
      this.value = value;
      this.child = {}
      this.terminal = false;
    }
  
    isTerminal() {
      //Regresar true si se trata de un nodo terminal
      return this.terminal;
    }
  
    numChildren() {
      //Regresa el numero de nodos hijos del nodo actual.
      return Object.keys(this.child).length;
    }
  
    hasChild(char) {
      //Regresar true si el nodo contiene un nodo hijo que almacena un caracter dado.
      return this.child[char] !== undefined;
    }
  
    getChild(char) {
      //Regresar el nodo hijo si es que almacena un caracter dado
      return this.child[char];
    }
  
    addChild(char, child_node) {
      //Agregamos el caracter en el nodo hijo de este nodo
      //No deberás agregar el nodo si ya existe un nodo hijo con ese caracter
      if (!this.child[char]) {
        this.child[char] = child_node;
      }
    }
  }