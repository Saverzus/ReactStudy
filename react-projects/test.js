import React, { Component } from 'react';

interface Param {
    id: number;
    name: string;
    type: 'string';
}

interface ParamValue {
    paramId: number;
    value: string;
}

interface Model {
    paramValues: ParamValue[];
}

interface Props {
    params: Param[];
    model: Model;
}

interface State {
    model: Model;
}

class ParamEditor extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            model: props.model,
        };
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, paramId: number) => {
        const value = event.target.value;
        this.setState(prevState => {
            const updatedParamValues = prevState.model.paramValues.map(paramValue =>
                paramValue.paramId === paramId ? { ...paramValue, value } : paramValue
            );
            return { model: { ...prevState.model, paramValues: updatedParamValues } };
        });
    };

    getModel = (): Model => {
        return this.state.model;
    };

    render() {
        const { params } = this.props;
        const { model } = this.state;

        return (
            <div>
                {params.map(param => {
                    const paramValue = model.paramValues.find(pv => pv.paramId === param.id);
                    return (
                        <div key={param.id}>
                            <label>{param.name}</label>
                            <input
                                type="text"
                                value={paramValue ? paramValue.value : ''}
                                onChange={event => this.handleInputChange(event, param.id)}
                            />
                        </div>
                    );
                })}
                <button onClick={() => console.log(this.getModel())}>Get Model</button>
            </div>
        );
    }
}

export default ParamEditor;
