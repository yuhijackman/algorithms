function averagePair(arr, average){
  let head = 0;
  let tail = arr.length - 1;
  let tmpAvg = null;
    while (head < tail) {
        tmpAvg = (arr[head] + arr[tail]) / 2;
        if (tmpAvg === average) return true;
        if (tmpAvg > average) {
            tail--;
        } else {
            head++;
        }
    }

  return false;
}