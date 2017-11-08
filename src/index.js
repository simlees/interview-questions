import { middleOfLinkedList } from './other/middle-of-linked-list';

let list = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  }
}

middleOfLinkedList(list);
