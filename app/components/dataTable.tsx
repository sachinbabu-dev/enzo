// components/CoursesTable.tsx
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Course } from '../models/cource';

interface CoursesTableProps {
    courses: Course[];
}

const CoursesTable: React.FC<CoursesTableProps> = ({ courses }) => {
    const columns: ColumnsType<Course> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Public',
            dataIndex: 'public',
            key: 'public',
            render: (text: boolean) => (text ? 'Yes' : 'No'),
        },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (text: boolean) => (text ? 'Yes' : 'No'),
        },
        {
            title: 'Regions',
            dataIndex: 'regions',
            key: 'regions',
            render: regions => regions.join(', '),
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            key: 'tags',
            render: tags => tags.join(', '),
        },
    ];

    return <Table dataSource={courses} columns={columns} rowKey="name" />;
};

export default CoursesTable;
