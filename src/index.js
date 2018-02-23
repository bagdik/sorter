class Sorter {
  constructor() {
    // your implementation
	this.arr = new Array();
	this.comparator = function(a, b){
		return a - b;
	}
  }

  add(element) {
    // your implementation
	this.arr.push(element);
  }

  at(index) {
    // your implementation
	return this.arr[index];
  }

  get length() {
    // your implementation
	return this.arr.length;
  }

  toArray() {
    // your implementation
	return this.arr;
  }

 
  sort(indices) {
    indices.sort((a,b) => a - b)
    let tmp = [];
    indices.forEach(i => {
       tmp.push(this.at(i)); 
    });
    tmp.sort(this.comparator);
    for (let i = 0; i < tmp.length; i++) {
      this.arr[indices[i]] = tmp[i];
    }
  }

  setComparator(compareFunction) {
    // your implementation
	this.comparator = compareFunction;
  }
}

module.exports = Sorter;
