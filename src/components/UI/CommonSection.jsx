import '../../styles/common-section.scss';

const CommonSection = ({title}) => {
    return (
        <section className="common__section">
            <div className='text-center'>
                <h1>{title}</h1>
            </div>
        </section>
    )
}

export default CommonSection;