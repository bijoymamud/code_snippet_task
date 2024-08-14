import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useSnippet from "../../../Hooks/useSnippet";


const Snippats = () => {
    const [snippats] = useSnippet();

    return (
        <section className="p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {snippats.map((snippat) => (
                    <div key={snippat.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-2">{snippat.title}</h2>
                            <p className="text-gray-500 mb-4">{snippat.date}</p>
                            <div className="mb-4">
                                <button className="bg-red-300 text-white px-4 py-1 rounded-lg text-sm">
                                    {snippat.category}
                                </button>
                            </div>
                            <p className="text-gray-700 mb-4">{snippat.description}</p>
                            <div className="code-editor ">
                                <SyntaxHighlighter language={snippat.language} style={materialDark}>
                                    {snippat.code}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Snippats;
