const mdToPdf = require('md-to-pdf');

(async () => {
    const pdf = await mdToPdf('guide.md', { dest: 'guide.pdf' }).catch(console.error);

    if (pdf) {
        console.log(pdf.filename);
    }
})();