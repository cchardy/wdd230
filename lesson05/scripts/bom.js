
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Helper function to check for duplicates
function isDuplicate(chapter) {
    const chapters = Array.from(list.querySelectorAll('li'));
    return chapters.some(li => li.textContent.includes(chapter));
}

// Allows users to add chapters by pressing "ENTER"
button.addEventListener('click', addChapter);
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addChapter();
    }
});

// The input field is cleared and focus is set back to it
function addChapter() {
    const chapter = input.value.trim();

    if (chapter === '') {
        input.focus();
        return;
    }

    // Checks for duplicate chapters
    if (isDuplicate(chapter)) {
        alert('Chapter is already in the list!');
        input.value = '';
        input.focus();
        return;
    }

    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = chapter;
    deleteButton.textContent = '✖️';

    li.append(deleteButton);
    list.append(li);

    // Delete chapter when the delete button is clicked
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    });

    input.value = '';
    input.focus();
}

const el = document.getElementById('button');
console.log(el.ariaLabel);
el.ariaLabel = 'Add a Chapter';
console.log(el.ariaLabel);