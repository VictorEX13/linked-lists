import ListNode from "./listNode";

const LinkedList = () => {
  let list;

  const append = (value) => {
    const newNode = ListNode(value);

    if (!list || (list && Object.keys(list).length === 0)) {
      list = newNode;
    } else {
      let listCopy = list.next ? { ...list } : list;

      while (listCopy.next) {
        listCopy = listCopy.next;
      }

      listCopy.next = newNode;
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
      let listCopy = { ...list };

      while (listCopy) {
        counter++;
        listCopy = listCopy.next;
      }
    }

    return counter;
  };

  const head = () => list;

  const tail = () => {
    let listCopy;

    if (list) {
      listCopy = { ...list };

      while (listCopy.next) {
        listCopy = listCopy.next;
      }
    }

    return listCopy;
  };

  const at = (index) => {
    let listCopy;

    if (list && Object.keys(list).length > 0 && index >= 0) {
      listCopy = { ...list };

      for (let i = 0; i < index; i++) {
        if (listCopy.next) {
          listCopy = listCopy.next;
        } else {
          return undefined;
        }
      }
    }

    return listCopy;
  };

  const pop = () => {
    if (list) {
      if (!list.next) {
        list = {};
      } else if (!list.next.next) {
        list.next = null;
      } else {
        let listCopy = { ...list };

        while (listCopy.next.next) {
          listCopy = listCopy.next;
        }

        listCopy.next = null;
      }
    }
  };

  const contains = (value) => {
    let doContain = false;

    if (list && Object.keys(list).length > 0) {
      let listCopy = { ...list };

      while (listCopy) {
        if (listCopy.value === value) {
          doContain = true;
          break;
        } else {
          listCopy = listCopy.next;
        }
      }
    }

    return doContain;
  };

  const find = (value) => {
    if (list && Object.keys(list).length > 0 && contains(value)) {
      let listCopy = { ...list };
      let index = 0;

      while (listCopy) {
        if (listCopy.value === value) {
          return index;
        } else {
          index++;
          listCopy = listCopy.next;
        }
      }
    } else {
      return null;
    }
  };

  const toString = () => {
    if (list && Object.keys(list).length > 0) {
      let listCopy = { ...list };
      let result = "";

      while (listCopy) {
        result += `( ${listCopy.value} ) -> `;
        listCopy = listCopy.next;
      }

      return result + "null";
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
  };
};

export default LinkedList;
