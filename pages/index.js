
import Home from '../components/Home';
import Layout from '../components/Layout';


export default function Index() {

    const title = 'Title';
    const description = 'Desc bla bla!';
    return (
        <Layout title={title} desc={description}>
            <Home></Home>
        </Layout>
    );
}