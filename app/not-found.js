import NotFound from '@/components/NotFound';

const RootNotFoundPage = () => {
    let message = 'The page you are requested is not found!';

    return (
        <section className="pt-[100px]">
            <NotFound message={message} />
        </section>
    );
};

export default RootNotFoundPage;
