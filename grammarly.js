let input = document.querySelector('input')
let textarea = document.querySelector('textarea')

input.addEventListener('change', () => {
    let files = input.files;

    if (files.length == 0) return;
    
    const file = files[0]
    
    let reader = new FileReader()

    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/)
        textarea.value = lines.join('\n')
        fetch('https://api.textgears.com/spelling?key=1gVny1rfj02gy7kY&text='+ textarea.value)
            .then(response => response.json())
            .then(data => console.log(data));
    }

    reader.onerror = (e) => alert(e.target.error.name)

    reader.readAsText(file)

    
})
