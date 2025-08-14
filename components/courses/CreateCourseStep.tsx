export default function CreateCourseStep({step, total}){
    return (
        <p className="text-gray-500 mb-6">
            Step {step} on {total}
        </p>
    )
}