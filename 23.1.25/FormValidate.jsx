import { useForm } from "react-hook-form";
import './FormValidate.css';

const FormValidate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert(`Form submitted successfully. Name: ${data.name}`);
    console.log(data);
  };

return (
    <div className="form-design">
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-grp">
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="error">{errors.name.message}</p>}
            </div>

            <div className="form-grp">
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    {...register('email', {
                        required: 'Email is Required',
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Enter a valid email address',
                        },
                    })}
                />
                {errors.email && <p className="error">{errors.email.message}</p>}
            </div>

            <div className="form-grp">
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 4,
                            message: 'Password must be at least 4 characters',
                        },
                    })}
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
            </div>

            <div className="form-grp">
                <label htmlFor="phone">Phone Number:</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    {...register('phone', {
                        required: 'Phone number is required',
                        pattern: {
                            value: /^[0-9]{10}$/,
                            message: 'Enter a valid 10-digit phone number',
                        },
                    })}
                />
                {errors.phone && <p className="error">{errors.phone.message}</p>}
            </div>

            <div className="form-grp">
                <label htmlFor="gender">Gender:</label>
                <select
                    id="gender"
                    {...register('gender', { required: 'Gender is required' })}
                >
                    <option value="">Select your gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
                {errors.gender && <p className="error">{errors.gender.message}</p>}
            </div>

            <div className="term-label">
                <label htmlFor="terms">
                    <input
                        id="terms"
                        type="checkbox"
                        {...register('terms', { required: 'You must accept the terms and conditions' })}
                    />
                    I accept the terms and conditions
                </label>
                {errors.terms && <p className="error">{errors.terms.message}</p>}
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
);
};

export default FormValidate;
