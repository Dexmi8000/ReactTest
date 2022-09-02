import { NavLink } from 'react-router-dom';
import dexstyle from './News.module.css';

let TopicsData = [
    { topicLink: 'topic1', topicName: "Topic-1" },
    { topicLink: 'topic2', topicName: "Topic-2" },
    { topicLink: 'topic3', topicName: "Topic-3" }
]

let ContentData = [
    { contentItem: 'content 1' },
    { contentItem: 'content 2' },
    { contentItem: 'content 3' }
]

let ContentFull = ContentData.map( (content)=> <Content content={content.contentItem} />)

let topicFull = TopicsData.map(
    function (topic) {
        return (
            <Topic topicLink={topic.topicLink} topicName={topic.topicName} />
        )
    }
)

function Topic(props) {
    return (
        <div className={dexstyle.newsTopic}>
            <NavLink to={'/News/' + props.topicLink} className={topicLink => topicLink.isActive ? dexstyle.active : dexstyle.default} >
                {props.topicName}
            </NavLink >
        </div>
    )
}

function Content(props) {
    return (
        <div className={dexstyle.content}>
            {props.content}
        </div>
    )
}

function News() {
    return (
        <div className={dexstyle.news}>
            <div className={dexstyle.newsContent}>
                {ContentFull}
            </div>
            <div className={dexstyle.newsTopics}>
                {topicFull}
            </div>
        </div >
    )
}

export default News;