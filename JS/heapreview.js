class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let targetIdx = this.values.length - 1;
        let parentIdx = this.getParentIndex(targetIdx);
        while (parentIdx >= 0) {
            let parent = this.values[parentIdx];
            let target = this.values[targetIdx];
            if (parent < target) {
                this.values[parentIdx] = target;
                this.values[targetIdx] = parent;
                targetIdx = parentIdx;
                parentIdx = this.getParentIndex(targetIdx);
            } else {
                break;
            }
        }
    }

    getParentIndex(idx) {
        return Math.floor((idx - 1) / 2);
    }

    extractMax() {
    
    }
}

let heap = new MaxBinaryHeap;
heap.insert(55);
console.log(heap);