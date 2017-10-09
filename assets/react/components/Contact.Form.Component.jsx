var React = require('react');

const ContactFormComponent = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form onSubmit={this.props.handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input className="form-control" type="email" name="email" value={this.props.email} onChange={this.props.handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input className="form-control" type="text" name="name" value={this.props.name} onChange={this.props.handleChange} required />
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea className="form-control" type="text" name="message" value={this.props.message} onChange={this.props.handleChange} style={{ resize: 'none' }} required></textarea>
                            </div>
                            <div className="form-group">
                                <input className="btn btn-primary" type="submit" value="Submit" />
                                <input className="btn btn-danger" type="reset" value="Reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
})
module.exports = ContactFormComponent;