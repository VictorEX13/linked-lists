import ListNode from "./listNode";

const LinkedList = () => {
  let list;

  const append = (value) => {
    const newNode = ListNode(value);

    if (!list || (list && Object.keys(list).length === 0)) {
      list = newNode;
    } else {
      let currentNode = list.next ? { ...list } : list;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = newNode;
    }
  };

  const prepend = (value) => {
    if (!list || (list && Object.keys(list).length === 0)) {
      const newNode = ListNode(value);
      list = newNode;
    } else {
      const newNode = ListNode(value, list);
      list = newNode;
    }
  };

  const size = () => {
    let counter = 0;

    if (list && Object.keys(list).length > 0) {
      let currentNode = { ...list };

      while (currentNode) {
        counter++;
        currentNode = currentNode.next;
      }
    }

    return counter;
  };

  const head = () => list;

  const tail = () => {
    let currentNode;

    if (list) {
      currentNode = { ...list };

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  };

  const at = (index) => {
    let currentNode;

    if (list && Object.keys(list).length > 0 && index >= 0) {
      currentNode = { ...list };

      for (let i = 0; i < index; i++) {
        if (currentNode.next) {
          currentNode = currentNode.next;
        } else {
          return undefined;
        }
      }
    }

    return currentNode;
  };

  const pop = () => {
    if (list) {
      if (!list.next) {
        list = {};
      } else if (!list.next.next) {
        list.next = null;
      } else {
        let currentNode = { ...list };

        while (currentNode.next.next) {
          currentNode = currentNode.next;
        }

        currentNode.next = null;
      }
    }
  };

  const contains = (value) => {
    let doContain = false;

    if (list && Object.keys(list).length > 0) {
      let currentNode = { ...list };

      while (currentNode) {
        if (currentNode.value === value) {
          doContain = true;
          break;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    return doContain;
  };

  const find = (value) => {
    if (list && Object.keys(list).length > 0 && contains(value)) {
      let currentNode = { ...list };
      let index = 0;

      while (currentNode) {
        if (currentNode.value === value) {
          return index;
        } else {
          index++;
          currentNode = currentNode.next;
        }
      }
    } else {
      return null;
    }
  };

  const toString = () => {
    if (list && Object.keys(list).length > 0) {
      let currentNode = { ...list };
      let result = "";

      while (currentNode) {
        result += `( ${currentNode.value} ) -> `;
        currentNode = currentNode.next;
      }

      return result + "null";
    }
  };

  const insertAt = (value, index) => {
    if (!list || index <= 0) {
      prepend(value);
    } else if (index >= size(list)) {
      append(value);
    } else {
      let currentNode = { ...list };

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      const newNode = ListNode(value, currentNode.next);

      currentNode.next = newNode;
    }
  };

  const removeAt = (index) => {
    if (
      list &&
      Object.keys(list).length > 0 &&
      index >= 0 &&
      index < size(list)
    ) {
      if (index === 0) {
        list = list.next;
      } else if (index === size(list) - 1) {
        pop();
      } else {
        let currentNode;

        if (index === 1) {
          currentNode = list;
        } else {
          currentNode = { ...list };

          for (let i = 0; i < index - 1; i++) {
            currentNode = currentNode.next;
          }
        }

        currentNode.next = currentNode.next.next;
      }
    } else {
      throw new Error("There is no node at the given index!");
    }
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

export default LinkedList;
