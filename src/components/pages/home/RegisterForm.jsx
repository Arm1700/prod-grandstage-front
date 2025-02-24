import {useForm} from "react-hook-form";
import {useState} from "react";
import Input from "../shared/contact/Input";
import Button from "../shared/contact/Button";
import Notification from "../shared/contact/Notification";
import {formValue} from "../../../entities/formValue"
import {postData} from "../contacts/api/fetchMessage";

export default function RegisterForm() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm();
    const [showNotify, setShowNotify] = useState(false);
    const [status, setStatus] = useState(null);

    const triggerNotification = () => {
        setShowNotify(true);
        setTimeout(() => setShowNotify(false), 3000);
    };

    const onSubmit = async data => {
        try {
            const response = await postData(data)

            triggerNotification()
            setStatus({
                status: 'success',
                message: 'Message was sent successfully',
            })

            reset()
            console.log('Data posted successfully:', response)
        } catch (error) {
            reset()
            triggerNotification()
            setStatus({
                status: 'error',
                message: error.message,
            })
            console.error('Error occurred while posting context:', error)
        }
    }


    return (
        <div>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-lg shadow-lg"
            >
                <h2 className="col-span-full text-center text-2xl font-bold uppercase">
                    New Student Registration
                </h2>

                {/* Динамическая генерация полей */}
                {formValue.input.map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                            {field.label}
                        </label>    
                        <Input
                            id={field.name}
                            type={field.type}
                            placeholder={field.placeholder}
                            name={field.name}
                            value={field.value}
                            disabled={field.disabled}
                            bg={field.bgColor}
                            bold={field.bold}
                            color={field.color}
                            size={field.size}
                            {...register(field.name, {
                                required: field.required ? `${field.label} is required` : false,
                                pattern: field.pattern
                            })}
                            error={errors[field.name]?.message}
                        />
                    </div>
                ))}
                {/* Политики и отказ от ответственности */}
                <div className="col-span-full space-y-2">
                    <p className="font-bold">{formValue.check.label}</p>
                    <div className="grid grid-cols-2 gap-4">
                        {formValue.check.options.map((policy, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type={formValue.check.type}
                                    id={`policy${index}`}
                                    {...register(`policies.${index}`, {required: "You must accept this policy"})}
                                    className="mr-2"
                                />
                                <label htmlFor={`policy${index}`} className="text-sm">
                                    {policy}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="col-span-full space-y-2">
                    <p className="font-bold">Waiver and Release:</p>
                    <textarea
                        id={formValue.waiver.name}
                        className="w-full h-32 p-2 border border-gray-300 rounded"
                        value={formValue.waiver.value}
                        readOnly
                    />
                    <div className="flex items-center mt-2">
                        <input
                            type="checkbox"
                            id="waiver"
                            {...register("waiver", {required: "You must accept the waiver"})}
                            className="mr-2"
                        />
                        <label htmlFor="waiver">I have read and agree to the waiver</label>
                    </div>
                </div>

                <div className="col-span-full">
                    <Button type="submit" text="Submit Registration"/>
                </div>
            </form>

            {showNotify && (
                <Notification status={status?.status} message={status?.message}/>
            )}
        </div>
    );
}
