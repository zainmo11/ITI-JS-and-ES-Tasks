const LinkedListObj = {
    data: [],

    pushVal: function (value) {
        try {
            if (!this.isSequence(value)) throw new Error("Value not in sequence.");
            if (this.hasDuplicate(value)) throw new Error("Duplicate value detected.");

            this.data.push({ value });
            this.updateDisplay();
        } catch (error) {
            alert(error.message);
        }
    },

    insertAt: function (index, value) {
        try {
            if (this.hasDuplicate(value)) throw new Error("Duplicate value detected.");
            if (index < 0 || index > this.data.length) throw new Error("Invalid index.");

            this.data.splice(index, 0, { value });
            this.updateDisplay();
        } catch (error) {
            alert(error.message);
        }
    },

    popVal: function () {
        try {
            if (this.data.length === 0) throw new Error("List is empty.");

            const value = this.data.pop();
            this.updateDisplay();
            return value;
        } catch (error) {
            alert(error.message);
        }
    },

    removeByVal: function (value) {
        try {
            const index = this.data.findIndex(item => item.value === value);
            if (index === -1) return "Data not found.";

            this.data.splice(index, 1);
            this.updateDisplay();
            return `Value ${value} removed.`;
        } catch (error) {
            alert(error.message);
        }
    },

    dequeueVal: function () {
        try {
            if (this.data.length === 0) throw new Error("List is empty.");

            const value = this.data.shift();
            this.updateDisplay();
            return value;
        } catch (error) {
            alert(error.message);
        }
    },

    hasDuplicate: function (value) {
        return this.data.some(item => item.value === value);
    },

    isSequence: function (value) {
        if (this.data.length === 0) return true;
        return this.data[this.data.length - 1].value  <= value;
    },

    updateDisplay: function () {
        const listContent = document.getElementById('listContent');
        if (this.data.length === 0) {
            listContent.textContent = "List is empty.";
            return;
        }

        const values = this.data.map(item => item.value);
        listContent.textContent = values.join(" -> ");
    }
};

function enqueueValue() {
    const valueInput = document.getElementById('valueInput').value;
    if (valueInput) {
        LinkedListObj.pushVal(Number(valueInput));
        document.getElementById('valueInput').value = '';
    } else {
        alert("Please enter a value.");
    }
}

function dequeueValue() {
    const value = LinkedListObj.dequeueVal();
    if (value) {
        alert(`Dequeued Value: ${value.value}`);
    }
}

function popValue() {
    const value = LinkedListObj.popVal();
    if (value) {
        alert(`Popped Value: ${value.value}`);
    }
}

function insertAt() {
    const valueInput = document.getElementById('valueInput').value;
    const indexInput = document.getElementById('insertIndex').value;
    if (valueInput && indexInput) {
        LinkedListObj.insertAt(Number(indexInput), Number(valueInput));
        document.getElementById('valueInput').value = '';
        document.getElementById('insertIndex').value = '';
    } else {
        alert("Please enter a value and an index.");
    }
}

function removeValue() {
    const valueInput = document.getElementById('removeValueInput').value;
    if (valueInput) {
        const message = LinkedListObj.removeByVal(Number(valueInput));
        alert(message);
        document.getElementById('removeValueInput').value = '';
    } else {
        alert("Please enter a value to remove.");
    }
}
