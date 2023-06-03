

export default function Parser(markdown)
{
    const lines = markdown.split('\n');
    const parsedResult = [];

    for(let i = 0; i < lines.length; i++)
    {
        const line = lines[i];
        if(line.startWith('# ')){
          parsedResult.push({type: 'heading', content: line.substring(2)});
        }
    }
};

