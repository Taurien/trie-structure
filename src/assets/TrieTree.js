import { TrieTreeNode } from "./TrieTreeNode";

export class TrieTree {
    /* */
    /* TrieTree: Es un árbol de prefijos con múltiples vías que almacena strings de forma eficiente
    con métodos para insertar un string en el árbol, un método para comprobar si la estructura 
    contiene una coincidencia para una determinado string y 
    un método para obtener todas las cadenas que comienzan con un string de prefijo. */
    constructor() {
      //¿Cuáles son las caracteristicas del árbol trie?
      this.root = new TrieTreeNode(null)
    }
  
    findNode(prefix) {
      /*
        Regresa un arreglo: [node, depth]
        1. nodo más profundo en el árbol trie que coincide con el prefijo más largo del string dado 
        2. la profundidad del nodo.
  
        La profundidad devuelta es igual al número de caracteres de prefijo coincidentes.
        La búsqueda se realiza de forma iterativa con un bucle que comienza desde el nodo raíz.
      */
      let current = this.root;
      for (let char in prefix) {
        if (current.hasChild(char)) {
          current = current.child[char];
        } else {
          return [undefined]
        }
        return
      }
    }
  
    traverse(node, prefix, visit, n) {
      /*
        Recorre el trie tree de forma recursiva.
        Empezando con el prefijo dado y visita (agrega a la lista) cada nodo con la función visit
      */
      if (n === 0) {
        return visit(prefix);
      }
      this.traverse(node, prefix + n, visit, n - 1)
    }
  
    isEmpty() {
      let node = this.root
      // Regresa true si el trie tree está vacío (no contiene strings)
      return Object.keys(node.child).length === 0
    }
  
    contains(str) {
      
      if (!str) return
      else {
        console.log(str)
        
      }
      // Regresa true si el string se encuentra en el trie tree
      return
    }
  
    insert(string) {
      // Agrega un string con todos los caracteres en el trie tree
      let node = this.root
  
      for (const char of string) {
        // console.log(char)
        if (node.child[char] == null) node.child[char] = new Node(char)
        node = node.child[char]
      }
  
      node.terminal = true
    }
  
  
    complete(prefix) {
      // Regresa una lista de strings que coincidan con el prefijo
      let current = this.root;
      for (let i = 0; i < prefix.lenght; i++) {
        if (!current.child[prefix[i]]) {
          return [];
        }
        current = current.child[prefix[i]]
      }
      let words = [];
      for (let key in current.child) {
  
      }
    }
  
    allTreeStrings() {
      // Crea la lista de todos los strings almacenados en este trie tree
      const words = []
      let node = this.root
  
  
      const search = (node, str) => {
        for (const entry of Object.entries(node.child)) {
          let char = entry[0];
          node = entry[1];
          if (node.terminal) {
            words.push(str.concat(char));
          }
          search(node, str.concat(char));
        }
      };
      search(node, ""); // first call
  
  
      return words
    }
  }
  
  const myTree = new TrieTree()
  console.log(myTree.isEmpty())
  myTree.insert('hola')
  myTree.insert('hole')
  console.log(JSON.stringify(myTree), 'x')
  console.log()
  // console.log(myTree, 'y')
  console.log(myTree.allTreeStrings())
  console.log(myTree.isEmpty())
  console.log(myTree.contains('hola'))
