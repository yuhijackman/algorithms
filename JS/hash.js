class Hash {

    set(key, value) {
        let hash = this._hash(key);
        if (this.values[hash]) {
            this.values[hash].push(value);
        } else {
            this.values[hash] = [value];
        }

    }
}