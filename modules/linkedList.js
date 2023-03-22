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

  return { append, prepend, size, head, tail, at, pop };
};

export default LinkedList;
