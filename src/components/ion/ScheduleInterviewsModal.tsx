'use client';
// Generated with Ion on 2/12/2024, 11:21:58 AM
// Figma Link: https://www.figma.com/file/CuhlaeGrgTg8c0wAZqD6ny?node-id=4048:6949
import { MouseEvent, useState } from 'react';
import Button from '@/components/ion/Button';
import Divider from '@/components/ion/Divider';
import Input from '@/components/ion/Input';
import { Globe, ArrowRight, Bluetooth } from '@phosphor-icons/react';
import { RadioGroupItem as Radio, RadioGroup } from '@/components/ion/Radio';
import Textarea from '@/components/ion/Textarea';
import Select from '@/components/ion/Select';
import Modal from '@/components/ion/Modal';

type ScheduleInterviewsModalProps = {
    children: React.ReactNode;
};

function ScheduleInterviewsModal({ children }: ScheduleInterviewsModalProps) {
	function cancelClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('cancelClickHandler fired');
	}
	function sendInviteClickHandler(e: MouseEvent<HTMLButtonElement>) {
		alert('sendInviteClickHandler fired');
	}
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const [description, setDescription] = useState('');
	const [openModal, setOpenModal] = useState(false);
	return (
		<div className="bg-background flex-col flex h-fit">
			<Modal
                showClose={true}
                open={openModal}
                onOpenChange={setOpenModal}
                footer={
                    <div className="w-full flex justify-end items-center gap-2 p-5 h-fit">
                        <Button emphasis="medium" color="secondary" size="md" onClick={cancelClickHandler}>
                            Cancel
                        </Button>
                        <Button emphasis="high" color="primary" size="md" onClick={sendInviteClickHandler}>
                            Send Invite
                        </Button>
                    </div>
                }
                subtitle="Plan, organize, and schedule one or more interviews."
                title="Schedule Interviews"
                iconLocation="left"
                align="left"
                trigger={children}
			>
				<div className="w-full flex-col flex gap-5 p-5 h-fit">
					<div className="text-base font-semibold text-foreground w-[480px]">
						Subject: call with Leslie B. - Human Resources Specialist
					</div>
					<Divider />
					<div className="w-full flex items-start gap-5">
						<Input
							placeholder="John Smith"
							label="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="w-full"
						/>
						<Input
							placeholder="GMT-04:00"
							label="Password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full"
						/>
					</div>
					<div className="w-full flex items-start gap-5">
						<Select
							placeholder="Time"
							options={[
								{
									description: 'first',
									iconLeading: <Globe size={16} weight={'regular'} />,
									label: 'Item 1',
									value: 'Item 1',
								},
								{
									description: 'second',
									iconLeading: <ArrowRight size={16} />,
									label: 'Item 2',
									value: 'Item 2',
								},
								{
									description: 'third',
									iconLeading: <Bluetooth size={16} />,
									label: 'Item 3',
									suffix: '@third',
									value: 'Item 3',
								},
							]}
							label="Time"
							className="w-full"
						/>
						<Select
							placeholder="Duration"
							options={[
								{
									description: 'first',
									iconLeading: <Globe size={16} weight={'regular'} />,
									label: 'Item 1',
									value: 'Item 1',
								},
								{
									description: 'second',
									iconLeading: <ArrowRight size={16} />,
									label: 'Item 2',
									value: 'Item 2',
								},
								{
									description: 'third',
									iconLeading: <Bluetooth size={16} />,
									label: 'Item 3',
									suffix: '@third',
									value: 'Item 3',
								},
							]}
							label="Duration"
							className="w-full"
						/>
					</div>
					<RadioGroup>
						<div className="w-full flex-col flex gap-2">
							<div className="text-sm font-semibold text-foreground">Location</div>
							<Radio label="Google Meet" value="Google Meet" />
							<Radio label="Zoom Video" value="Zoom Video" />
						</div>
					</RadioGroup>
					<Textarea
						placeholder="Add description..."
						label="Description"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="w-full"
					/>
				</div>
			</Modal>
		</div>
	);
}
export default ScheduleInterviewsModal;
